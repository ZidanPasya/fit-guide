// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'zuka.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//   },
// };

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '0341c258f1mshb28d132a870ca52p1b9925jsn40795b5cae00',
  },
};

export const chatBotOptions = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '0341c258f1mshb28d132a870ca52p1b9925jsn40795b5cae00',
    'X-RapidAPI-Host': 'lemurbot.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
