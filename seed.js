const { db } = require('./server/db')
const { green, red } = require('chalk')
const Student = require('./server/db/models/students') 
const Campus = require('./server/db/models/campuses') 
// seed your database here!
const Students = [{
  firstName: 'Oliver',
  lastName: 'Simmons',
  email: 'oliver@gmail.com',
  imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bR-HA_bMoAG8ClW-dlLoaEHQuFwizhi0-Hc-QGttlCG1iWhJ',
  gpa: 2.5
}, {
  firstName: 'Will',
  lastName: 'Powell',
  email: 'willyP@gmail.com',
  imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pc-HcQ0b3r8_ysOu8um22Yx55FHVa4gupcRpqdH1q4MR7qJ-',
  gpa: 4.0
}, {
  firstName: 'James',
  lastName: 'Schimmel',
  email: 'jschimmel@gmail.com',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Tb_jM_HhDVa6MyL6Vyfmmnl0vau1CFyxdLr4cqoYGSFR1ZP0Xw',
  gpa: 3.2 
}, {
  firstName: 'Gabe',
  lastName: 'Ja',
  email: 'GabeJa@gmail.com',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxodR4Cwa3cALtayqyBrgrFx5qIWvoF-rOCGi7hcoGLaLj6aH',
  gpa: 3.5
}]

const Campuses = [{
  name:'fullstack',
  imageUrl: '/Users/ethangould/FULLSTACK /FinalProject/junior-phase-final-project/public/fullstackimg.png',
  address: '5 Hanover Square',
  description: 'Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago.[1] Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program. Fullstack Academy offers beginner courses in Javascript (JavaScript Jumpstart)[2] and front-end development,[3] as well as a summer program for college-age students (Summer of Code), and a part-time version of their full-time curriculum (Flex).[4]'
}, {
  name: 'Ualbany',
  imageUrl: '/Users/ethangould/FULLSTACK /FinalProject/junior-phase-final-project/public/ualbanyimg.jpeg',
  address: '1400 Washington Ave',
  description: 'The State University of New York at Albany, commonly referred to as University at Albany, SUNY Albany or UAlbany, is a public research university with campuses in the New York cities of Albany and Rensselaer and the Town of Guilderland, United States. Founded in 1844, it is part of the State University of New York (SUNY) system.[4][5]'
}]

const seed = async () => {
  await db.sync({ force: true })
  await Promise.all(Students.map(student => {
    return Student.create(student); 
  }));
  await Promise.all(Campuses.map(campus => {
    return Campus.create(campus); 
  }));
  console.log(green('Seeding success!'))
  db.close() 
}
  
seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
