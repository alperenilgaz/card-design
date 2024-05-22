import './App.css';
import Certificate from './Components/Certificate';

const TeamData = [
  {
    place: "1st",
    team:"Whakawiri",
    icon: "bi bi-trophy-fill",
    score:340,
    teamPlayers:[
      {
        id:1,
        name:"Alperen İlgaz -",
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
        name:"Alperen İlgaz -",
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
        name:"Alperen İlgaz -",
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

 
      </div>
        <div className="total-score">
        <p>Puan:{score}</p>
      </div>
     
          
     
       
    </div>
  );
}

function App() {
  return (
    // <div className="container">
    //   {TeamData.map((data, index) => (
    //     <TeamCard key={index} {...data} />
    //   ))}
    // </div>
    <>
      <Certificate/>
    </>
  );
}

export default App;
