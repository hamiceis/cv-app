"use client";

import { Experience } from "./experience";
import { Title } from "./title";
import { InfoExperience } from "./info-experiences";
import { useState } from "react";

interface ExperienceProps {
  date: string;
  content: string;
}

export function Work() {
  const [experience, setExperience] = useState<ExperienceProps[]>([{
    date: "Nome da Empresa - 2014/2017",
    content: "Aqui você escreve uma breve descrição sobre a sua função..",
  }]);
  const [school, setSchool] = useState<{date: string, content: string}[]>([
    { date: "Nome da Instituição de ensino - 2020",
      content: "Curso"
    }
  ]);
  const [skill, setSkill] = useState([
    'Comunicação', 'trabalho em Equipe'
  ]);

  const [certifications, setCertifications] = useState<ExperienceProps[]>([{
    date: "Certificado de informática - 2013/2014",
    content: "certificações profissionais relevantes que você possua.",
  }]);

  const handleExperience = () => {
    const newExperience: ExperienceProps = {
      date: "Nome da Empresa - 2014/2017",
      content: "Aqui você escreve uma breve descrição sobre a sua função..",
    };
    setExperience((prevState) => [...prevState, newExperience]);
  };
  const removeLastExperience = () => {
    setExperience(prevState => {
      const updatedExperience = [...prevState]
      updatedExperience.pop();
      return updatedExperience
    })
  };

  const handleSchool = () => {
    const newSchool = { date: "Nome da Instituição de ensino - ANO",
    content: "Curso"
    }
    setSchool(prevState => [...prevState, newSchool])
  }
  const removeSchool = () => {
    setSchool(prevState => {
      const updatedSchool = [...prevState]
      updatedSchool.pop()
      return updatedSchool
    })
  }

  const handleSkill = () => {
    const newSkill = 'comunicação'
    setSkill(prevState => [...prevState, newSkill])
  }

  const removeLastSkill = () => {
    setSkill(prevState => {
      const updatedSkills = [...prevState]
      updatedSkills.pop();
      return updatedSkills
    })
  }
  const handleCertification = () => {
    const newCertification: ExperienceProps = {
      date: "Certificado - 2014/2014",
      content: "Aqui você escreve uma breve descrição sobre o que você aprendeu",
    };
    setCertifications((prevState) => [...prevState, newCertification]);
  };

  const removeLastCertification = () => {
    setCertifications(prevState => {
      const updatedCertifications = [...prevState]
      updatedCertifications.pop();
      return updatedCertifications
    })
  };

  return (
    <div className="h-full flex flex-1 max-w-3xl flex-col py-2">
      <Experience
        title="Experiência profissional"
        onIncrement={handleExperience}
        onDecrement={removeLastExperience}
      >
        <div className="flex flex-col gap-2 my-2">
          {experience.map((expe: ExperienceProps, index: number) => {
            return (
              <InfoExperience
                key={index}
                date={expe.date}
                content={expe.content}
              />
            );
          })}
        </div>
      </Experience>

      <Experience 
      title="Educação" 
      onIncrement={handleSchool} 
      onDecrement={removeSchool}
      >
        <div className="flex flex-col">
         {school.map((schol, index) => (
          <InfoExperience key={index} date={schol.date} content={schol.content} />
         ))}
        </div>
      </Experience>

      <Experience 
      title="Habilidades"
      onIncrement={handleSkill}
      onDecrement={removeLastSkill}
      >
        <div className="grid xl:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1  gap-4 my-10">
          {skill.map((habil: string, index: number) => (
            <div key={index} className="" >
            <Title title={habil} />
            <input className="w-28" type="range" name={habil} />
          </div>
          ))}
        </div>
      </Experience>

      <Experience
        title="Certificações"
        onIncrement={handleCertification}
        onDecrement={removeLastCertification}
      >
        <div className="flex flex-col gap-2 my-2">
          {certifications.map((certification: ExperienceProps, index: number) => {
            return (
              <InfoExperience
                key={index}
                date={certification.date}
                content={certification.content}
              />
            );
          })}
        </div>
      </Experience>


    </div>
  );
}
