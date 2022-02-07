import axios from "axios";

const Home = () => {
  const getUser = async () => {
    try {
      const headers = {
        Authorization:
          "Bearer BQA7YB45MAVuVT3x2BQn3alsu8KELADLZVNnicNkMmjvaOxAAmEc_XEu5XT8H9o-MH6viu03H8MO4AgoyGZdm1EXC6Jpkkl76xi4Os0_Bn-v_1QpjIQvIXTlpLxhA2h-y9lqK6tkQ3msh-SFS7GFgfiQws8r1BP4dLX-q7GLVKWGVAMLzdM",
      };
      const params = {limit:50,offset:0};
      const host = "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";
    //   const host = "https://api.spotify.com/v1/me/tracks";tracks
      const response = await axios.get(host, { headers });
      console.log("aver",response);
    } catch (error) {
      console.error(error);
    }
  };
  getUser();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
