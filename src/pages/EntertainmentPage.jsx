import React from 'react';
import CulturalActivitiesCard from '../components/CulturalActivityCard';

const EntertainmentPage = () => {
  const data = [
    {
      id: 1,
      title: "Traditional Dance Workshop",
      description: "Learn traditional folk dance techniques from expert instructors.",
      date: "July 15, 2024",
      location: "Community Arts Center",
      time: "6:00 PM - 8:00 PM",
      participants: 25,
      price: 45,
      imageUrl: "/path/to/dance-workshop-image.jpg"
    },
    {
      id: 2,
      title: "Pottery Making Class",
      description: "Explore the art of pottery and create your own masterpieces.",
      date: "July 20, 2024",
      location: "Creative Studio",
      time: "10:00 AM - 1:00 PM",
      participants: 15,
      price: 30,
      imageUrl: "/path/to/pottery-class-image.jpg"
    },
    {
      id: 3,
      title: "Painting with Watercolors",
      description: "Discover the beauty of watercolors in this hands-on painting session.",
      date: "July 25, 2024",
      location: "Art Gallery Hall",
      time: "3:00 PM - 5:30 PM",
      participants: 20,
      price: 40,
      imageUrl: "/path/to/painting-workshop-image.jpg"
    },
    {
      id: 4,
      title: "Cooking Masterclass: Italian Cuisine",
      description: "Learn to cook authentic Italian dishes from a renowned chef.",
      date: "July 30, 2024",
      location: "Kitchen Academy",
      time: "5:00 PM - 8:00 PM",
      participants: 12,
      price: 60,
      imageUrl: "/path/to/cooking-class-image.jpg"
    },
    {
      id: 5,
      title: "Music Jam Session",
      description: "Bring your instruments and join a vibrant group of musicians.",
      date: "August 5, 2024",
      location: "Open Air Amphitheater",
      time: "4:00 PM - 6:00 PM",
      participants: 30,
      price: 20,
      imageUrl: "/path/to/music-session-image.jpg"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Entertainment</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((activity) => (
          <CulturalActivitiesCard
            key={activity.id}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            location={activity.location}
            time={activity.time}
            participants={activity.participants}
            price={activity.price}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EntertainmentPage;
