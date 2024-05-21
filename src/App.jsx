import './App.css';

const TeamData = [
  {
    place: "1st",
    team:"Whakawiri",
    icon: "bi bi-trophy-fill",
    score:340,
    teamPlayers:[
      {
        id:1,
        name:"Alperen İlgaz",
      },
      {
        id:2,
        name:"Tahsin Kurt"
      }
    ]

  },
  {
    place: "2nd",
    team:"Anka",
    icon: "bi bi-trophy-fill",
    score:290,
    teamPlayers:[
      {
        id:1,
        name:"Alperen İlgaz",
      },
      {
        id:2,
        name:"Tahsin Kurt"
      }
    ]

  },
  {
    place: "3rd",
    team:"WhySoSerious",
    icon: "bi bi-trophy-fill",
    score:240,
    teamPlayers:[
      {
        id:1,
        name:"Alperen İlgaz",
      },
      {
        id:2,
        name:"Tahsin Kurt"
      }
    ]

  }
];

function TeamCard({ place, icon, team, teamPlayers, score }) {
  return (
    <div className="card shadow">
      <div className="card-header">
        <div className="price">
        <p>{place}</p>
        <i className={`bi ${icon}`}></i>
        </div>
        <div className="team-name">
        {team}
      </div>
      <div className="team-player">
       {teamPlayers && teamPlayers.map(player => (
        <p key={player.id}>{player.name}</p>
       ))}
      </div>

      <div className="total-score">
        <p>Puan:{score}</p>
      </div>
      
      </div>
      
      <div className="codePen">
        <button className='btn'><i class="bi bi-braces"></i>CodePen</button>
        <div className="modal">
                <div className="header">
                <i class="bi bi-dash-lg"></i>
                <i class="bi bi-fullscreen-exit"></i>
                <i class="bi bi-x-lg"></i>
                </div>
                <div className="content-wrap">
                <div className="row">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                </div>
                <div className="content">
                <ul>
                    <li style={{color:"#58aaed"}}>meta name=<span style={{color:"orange"}}>"viewport"</span>content=<span style={{color:"orange"}}>"width=device-width, initial-scale=1"</span></li>
                    <li style={{color:"#58aaed"}}>link rel=<span style={{color:"orange"}}>"apple-touch-icon"</span> href=<span style={{color:"orange"}}>"%PUBLIC_URL%/logo192.png"</span></li>
                    <li style={{color:"#58aaed"}}>link rel=<span style={{color:"orange"}}>"manifest"</span> href=<span style={{color:"orange"}}>"%PUBLIC_URL%/manifest.json"</span></li>
                    <li style={{color:"#58aaed"}}>meta charset=<span style={{color:"orange"}}>"utf-8"</span> </li>
                    <li style={{color:"#58aaed"}}>link rel=<span style={{color:"orange"}}>"icon"</span> href=<span style={{color:"orange"}}>"%PUBLIC_URL%/favicon.ico"</span> </li>
                  </ul>
                </div>
              </div>
          </div>
  
        </div>
          
     
       
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {TeamData.map((data, index) => (
        <TeamCard key={index} {...data} />
      ))}
    </div>
  );
}

export default App;
