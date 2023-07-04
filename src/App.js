import expue from './expue.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={expue} className="" alt="logo" />
        <h1>Expue</h1>
        <iframe className="title-player" title="expue-1" src="https://bandcamp.com/EmbeddedPlayer/album=2476150150/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://expue.bandcamp.com/album/no-fear-in-the-abyss">No Fear In The Abyss by Expue</a></iframe>
        <p className='intro'>
          <span style={{fontWeight: "bold"}}>Introducing Expue: Transcending Noise, Exploring the Depths Within</span>
          <br/>
          <br/>
          Step into a realm where noise becomes a gateway to profound introspection, where the clamor of sound gives rise to inner exploration. Meet Expue, a captivating noise project led by a relentless sonic seeker, dedicated to crafting their own instruments and delving into the depths of introspection through sound.
          <br/>
          <br/>
          Expue is an enigma, an artist who thrives on the interplay between noise and self-reflection. With every creation, they dismantle the boundaries between internal and external worlds, forging a path of sonic exploration that defies convention. In the quest for self-discovery, Expue finds solace and inspiration within the intricate mechanisms of their own handcrafted instruments.
          <br/>
          <br/>
          Each instrument is an extension of Expue's inner world, meticulously constructed to harness the power of sound and delve into the recesses of the human psyche. From the gentle hum of resonant strings to the dissonant whispers of modified electronics, these unique creations resonate with the artist's introspective journey. With each note and texture, Expue unveils a landscape of emotions, inviting listeners to embark on their own personal odyssey of self-discovery.
          <br/>
          <br/>
          In Expue's sonic tapestries, noise takes on a transformative quality, a catalyst for deep contemplation. As listeners surrender themselves to the immersive sonic landscapes, they are transported to a realm where thoughts and emotions intertwine, where the external chaos becomes a reflection of the internal struggles and triumphs. Expue's compositions become mirrors, guiding the introspective gaze inward, illuminating hidden aspects of the self.
          <br/>
          <br/>
          Through their one-of-a-kind instruments, Expue creates an environment that fosters introspection, encouraging listeners to confront their own thoughts, fears, and aspirations. It is an invitation to embrace vulnerability, to confront the depths within and emerge transformed. With every note and sonic gesture, Expue unveils the complexity of the human experience, drawing out the subtleties that often remain unexplored.
          <br/>
          <br/>
          In the presence of Expue's sonic craftsmanship, silence finds a voice, chaos finds purpose, and introspection finds expression. This noise project is a testament to the transformative power of self-reflection, a testament to the remarkable capacity of sound to guide us on an inward journey.
          <br/>
          <br/>
          Join Expue on this sonic pilgrimage, as they traverse the intricate landscapes of introspection, navigating the noise and discovering the untold depths within. Embark on a voyage of self-discovery, guided by the enigmatic creations of Expue, and unlock the secrets that lie within the interplay of noise and introspection. Welcome to Expue's world—where noise becomes a vessel for profound inner exploration.
          </p>
      </header>
    </div>
  );
}

export default App;
