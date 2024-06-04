import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const supabase = createServerComponentClient({ cookies });
const getDetailLesson = async (id: number) => {
  const { data: lesson } = await supabase
    .from("lesson")
    .select("*")
    .eq("id", id)
    .single();
  return lesson;
};

const LessonDetailPage = async ({params}: {params:{id: number}}) => {
  const lesson = await getDetailLesson(params.id)
  return (
    <>
      <h1>Lesson Detail Page</h1>
    </>
  );
};

export default LessonDetailPage;
