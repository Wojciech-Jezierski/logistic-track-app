const unsub = onSnapshot(
    collection(db, "users"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      
    },
    (error) => {
      console.log(error);
    }
  );