import { useRouter } from 'next/router';
import supabase from '../../utils/supabase';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const [markdown, setMarkdown] = useState('');

  function time(time) {
    var m = moment(time);
    return m.fromNow();
  }

  async function fetchData(id) {
    try {
      const { data, error } = await supabase
        .from('MD')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(error);
        return null;
      }

      console.log(data);
      setPost(data);
      setMarkdown(data.content);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    fetchData(router.query.id);
  }, []);

  return (
    <>
      <div className='flex flex-col items-center content-center space-y-10 py-24'>
        <div className='flex flex-row justify-center content-center text-center'>
          <span className='font-bold text-center text-6xl decoration-6 decoration-blue-500 underline'>
            {post?.title}
          </span>
        </div>
        <span className='text-center'>{time(post?.created_at)}</span>
        <article className='prose prose-lg bg-white p-10 w-full rounded-xl border'>
          <ReactMarkdown children={markdown} />
        </article>
      </div>
    </>
  );
}
