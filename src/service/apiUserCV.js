import supabase from "./supabase";

export async function getCV(userEmail) {
  let { data: UserCV, error } = await supabase.from("UserCV").select("*").eq("userEmail", userEmail);

  if (error) throw new Error("Failed to get cv");
  return UserCV;
}

export async function createCV(cv) {
  const { data, error } = await supabase
    .from("UserCV")
    .insert([cv])
    .select()
    .single();

  if (error) throw new Error("Failed to create cv");
  return data;
}
