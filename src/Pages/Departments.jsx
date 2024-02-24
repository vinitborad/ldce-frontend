import React, { useState } from 'react'
import Cards from "../components/Departments/Cards"
import { motion, AnimatePresence } from 'framer-motion'

const Departments = () => {


  const department_data = [
    {
      id: 1,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 2,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 3,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 4,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 5,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 6,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 7,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 8,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 9,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 10,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
    {
      id: 11,
      name: "Infromatio Technology",
      logo: "https://ldce.ac.in/upload/logo/departments/information-technology-logo.png",
      photo: "https://ldce.ac.in/gallery/4/minislider/information-technology-t4TYxQFtBD.jpg",
      info: "Message from the HOD Dear All, The Department of Applied Mechanics is a vital offshoot of Civil Engineering Program at L .D .College of Engineering. Applied Mechanics department has a distinguished and technically well-versed faculty imbued with a sense of commitment and sincerity. As the HOD of the department it is a matter of immense pride to bring to you the multifaceted activities and achievements of the department. We are a department of 16 faculty members, 2 of these holding Doctorates, 7 of these are pursuing Doctorate of Philosophy and the rest have a Master’s Degree. The strength of the courses offered by this department lies in a strong technical and field experience of the faculty who are involved in research and consultancy over and above their regular teaching wherein they actively involve the students through quizzes, models and field exercises to make learning an enriching experience. Faculty members are also involved in conducting training for working professionals in various government departments to keep them updated on recent and future trends. The department boasts of 2 Post graduate courses in Structural Engineering and Geo-tech, and UG program with electives in domain of Structural Analysis and Geo-tech. The department conducts technical competitions in model making of various aspects of Earthquake Resistant Design, Quiz competitions on Structural aspects with a view to broaden the horizons of knowledge for the students and to bring out their creativity and ability to work as team. Industry-Academia meet is arranged each year by the department to help its Post graduate students to develop a know-how of the technical advancements as well the Industry problems that can be taken up for their dissertation topics. In its endeavour to encourage Industry-Academia collaboration the department coordinates Expert Talks on different topics in order to make the students as well as faculty members stay abreast of latest development in the field of Structural engineering, Geo-technical Engineering, Concrete and allied construction materials, Earthquake engineering. Department also coordinates a number of Short Term Training Programmes, Industry visits, motivates students to participate in Technical events and mentors them to come up ace. Departmental webite: https://sites.google.com/view/amd-ldce/home",
    },
  ]

  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className=''>
      <div className=' h-[70px]'></div>
      <div className=''>
        {/* HEADER */}
        <div className=' flex items-center justify-center bg-slate-50 h-[70px] w-full'>
          <div className=' w-10/12 border-b-large border-b-red-800 h-full flex items-center justify-center'>
            <h1 className=' m-0 font-serif font-bold'>Departments</h1>
          </div>
        </div>
        {/* CONTENT CONTAINER */}
        <div className=' flex justify-center'>
          {/* WRPAER */}
          <div className='  w-10/12 flex items-center'>
            {/* Departments Cards CONTAINER */}
            <div className='  basis-3/4 flex flex-wrap justify-start gap-x-6 py-10 px-3 '>
              <motion.div layoutId={1} onClick={() => setSelectedId(1)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={2} onClick={() => setSelectedId(2)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={3} onClick={() => setSelectedId(3)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={4} onClick={() => setSelectedId(4)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={5} onClick={() => setSelectedId(5)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={6} onClick={() => setSelectedId(6)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <motion.div layoutId={7} onClick={() => setSelectedId(7)}>
                {/* <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2> */}
                <Cards />
              </motion.div>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />

              <AnimatePresence>
                {selectedId && (
                  <motion.div layoutId={selectedId} className=' bg-red-50 border border-black w-full'>
                    <motion.h5>HIi {selectedId}</motion.h5>
                    <motion.h2>HIO idsi isin din abor</motion.h2>
                    <motion.h2>HIO idsi isin din abor</motion.h2>
                    <motion.button onClick={() => setSelectedId(null)} />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
            {/* SIDEMENU CONTAINER */}
            <div className=' flex justify-start bg-yellow-200 w-full basis-1/4'>
              <p className=' w-full'>hi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments