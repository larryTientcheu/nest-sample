
//     const correctJson = {
//       first_date_of_execution: "2022-12-11T10:57:05.431Z",
//       repeat: 5,
//       task_id: "b575b2a5-ab99-4d49-9a8e-b28a1860ae8e"
//  }

//  const badJson = {
//   first_date_of_execution: "It's time",
//   repeat: 5,
//   task_id: 50
// }

//  it('/create POST', () => {
//       return request(app.getHttpServer())
//       .post('/create')
//       .send(correctJson)
//       .expect(200)
//     })
 

//     it('/create POST ---> error 400', () => {
//       return request(app.getHttpServer())
//       .post('/create')
//       .send(badJson)
//       .expect(400)
//     })

//   })

