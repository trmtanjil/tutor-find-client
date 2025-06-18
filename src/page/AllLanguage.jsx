import { ArrowRight, Book, Landmark, Globe, School, Library, Languages, BookOpen, BookText, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";
import TutorCount from "./TutorCount";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import CountLogin from "./CountLogin";
  
const AllLanguage = () => {
  const {user} =use(AuthContext)
  console.log(user);
  const navigate = useNavigate();

   const languages = [
    {
      name: "English",
      icon: <Book className="w-8 h-8 text-blue-600" />,
      count: "20,156",
    },
    {
      name: "Spanish",
      icon: <Landmark className="w-8 h-8 text-red-500" />,
      count: "6,250",
    },
    {
      name: "French",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      count: "2,056",
    },
    {
      name: "German",
      icon: <School className="w-8 h-8 text-yellow-600" />,
      count: "1,934",
    },
    {
      name: "Italian",
      icon: <Library className="w-8 h-8 text-green-600" />,
      count: "1,754",
    },
    {
      name: "Chinese",
      icon: <Languages className="w-8 h-8 text-red-600" />,
      count: "4,258",
    },
    {
      name: "Arabic",
      icon: <BookOpen className="w-8 h-8 text-green-800" />,
      count: "2,238",
    },
    {
      name: "Japanese",
      icon: <BookText className="w-8 h-8 text-indigo-600" />,
      count: "1,954",
    },
    {
      name: "Portuguese",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      count: "1,043",
    },
  ];

 



  return (
   <>
  
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center my-5 max-w-5xl mx-auto">
 <TutorCount ></TutorCount>
 <div className="text-center p-4 bg-blue-100 rounded-xl shadow-lg">
<p className="text-blue-600 text-3xl font-bold">  {languages.length}</p>
<p className="text-blue-600 text-3xl font-bold"> Language</p>
 </div>
 <CountLogin></CountLogin>
 
 <div>
 <div className="text-center p-4 bg-blue-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700">120 + </h2>
      <p className="text-blue-600 text-3xl font-bold">Total Review</p>
    </div>
 </div>
 </div>
    <div className="max-w-6xl mx-auto p-6">
      
      <h2 className="text-3xl font-bold mb-6 text-center">Language Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => navigate(`/findtutors/${lang.name.toLowerCase()}`)}


          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{lang.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{lang.name} Tutors</h3>
                <p className="text-sm text-gray-500">{lang.count} teachers</p>
              </div>
            </div>
            <ArrowRight /> 
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default AllLanguage;
