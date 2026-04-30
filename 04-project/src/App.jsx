
import Card from './components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    datePosted: "4 weeks ago",
    post: "Graphic Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    datePosted: "12 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Goa, India"
  }
];
 console.log(jobOpenings);

  return (
    <div className='nav'>
      <h1>Top Hirring Companies!!</h1>
    <div className='parent'>
      
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
        </div>

      })}

    </div>
    </div>
  )
}

export default App
