import supabase from "./supabase";

export async function getCV(userEmail) {
  let { data: UserCV, error } = await supabase
    .from("UserCV")
    .select("*")
    .eq("userEmail", userEmail);

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

export async function updateCV({ cv, cvID }) {
  const { data, error } = await supabase
    .from("UserCV")
    .update(cv)
    .eq("cvID", cvID)
    .select()
    .single();

  if (error) throw new Error("Failed to update cv");

  return data;
}

export async function getUserCV(cvID) {
  let { data: UserCV, error } = await supabase
    .from("UserCV")
    .select("*")
    .eq("cvID", cvID)
    .single();
  if (error) throw new Error("Failed to get user cv");

  return UserCV;
}

export async function deleteCV(cvID) {
  const { error } = await supabase.from("UserCV").delete().eq("cvID", cvID);
  if (error) throw new Error("Failed to delete cv");
}
