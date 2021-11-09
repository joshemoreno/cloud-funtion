const functions = require("firebase-functions");

// exports.deleteImage = functions.pubsub.schedule("0 24 * * *")
exports.deleteImage = functions.pubsub.schedule("0 0 2 * *")
    .onRun(() =>{
      console.log("run");
      const currentDate = new Date();
      let nameDir = currentDate.toISOString();
      nameDir = nameDir.replace(/\//g, "-");
      nameDir = nameDir.split("T")[0];
      const {Storage} = require("@google-cloud/storage");
      const bucketName = "proyectocea.appspot.com";
      const storage = new Storage();
      console.log(nameDir);
      storage.bucket(bucketName).deleteFiles({prefix: `images/${nameDir}`});
    });
