export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/tkabir3066");

  return res.json();
};
