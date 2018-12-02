import { AsyncStorage } from 'react-native';

const nhanData = async () => {
    try {
        const socketOn = await this.socket.on('server-send-client', async (data) => {

            await data.noidungemit.map( async (e) => {
                var imageNewJson1 = await e.dataImageJson;
                var convertJsonToBase64A = [await new Buffer1.Buffer(imageNewJson1).toString('base64')];
                await console.log('----imageNewJson1----');
                await console.log('imageNewJson1:::::::', await imageNewJson1);
                await console.log('----convertJsonToBase64A----');
                await console.log('convertJsonToBase64A:::::::', await convertJsonToBase64A);
                e.setState({
                    imageNewJson: await imageNewJson1,
                    convertJsonToBase64: await convertJsonToBase64A,
                })
            });
            console.log('---convertJsonToBase64----');
            await console.log('----convertJsonToBase64----');
            await console.log('convertJsonToBase64:::::::',await this.state.convertJsonToBase64);
            console.log('---========convertJsonToBase64========================----');


            /*
            console.log(await data);
            console.log('-----typedata-----');
            console.log(await data.typedata);
            console.log('---type----');
            console.log(await data.type);
            console.log('---fileImgaBase----');
            console.log(await data.fileImgaBase);
            console.log('---noidungemit1----');
            console.log(await data.noidungemit);

            await this.setState({ //lay tu mang 1
                typedata: await data.typedata,
                noidungemit: await data.noidungemit,
                fileBase: await data.fileBase,
            });
            await this.state.typedata.map( async (e2) => {
                var buffer = await Buffer1.Buffer(e2.text); //data nhan duoc la json ta chuyen ve buffer 
                var tostring = await buffer.toString(); // sau chuyen buffer ve chuoi tostring
                await e.setState({
                    //textNew: e2.text,
                    textNew: tostring,
                    id: e2.id,
                });
                console.log('-----textNew----');
                console.log('textNew:::', this.state.textNew);
                console.log('----id----');
                console.log('id:::', this.state.id);
            });
            await this.state.noidungemit.map( async (e3) => {
                var imageNewJson1 = await e3.dataImageJson;
                var convertJsonToBase64A = await new Buffer1.Buffer(imageNewJson1).toString('base64');
                await e.setState({      //setState ({ xxx: yyyy }) de sau nay muon lay da rung ta goi this.state.xxx
                    imageNewJson: await imageNewJson1,
                    convertJsonToBase64: await convertJsonToBase64A,
                });
                console.log('----imageNewJson----');
                console.log('imageNewJson:::', await this.state.imageNewJson);
                //   console.log(new Buffer1.Buffer(this.state.imageNewJson).toString('base64'));
                console.log('----convertJsonToBase64----');
                console.log('convertJsonToBase64:::', await this.state.convertJsonToBase64);
            });
            console.log('----====================================================-------');
            var res = await [{ text1: this.state.textNew, send1: this.state.textNew, id1: this.state.id, convertJsonToBase64_1: await this.state.convertJsonToBase64 }]
            console.log('----res-------');
            console.log(res);
            await res.map(async (e) => {
                this.setState({
                    id: e.id1,
                    maunen: e.text1,
                    dataJson: e.text1,
                    text: e.text1,
                    dataSource: await ds.cloneWithRows(res),
                    send: e.text1,
                    refreshing: true,
                });
            });
            */

         
        });
        return socketOn; //tra ve ket qua yyy
        
    } catch (e) {
        return e;
    }
}

export default nhanData;

{
    /*
               {
                   data.typedata.map(e1 => {  // data.typedata la lay ra tung mang 1, data.typedata.map(e => {...} trong 1 mang thi ra co the lay tung phan tu trong mang
                       console.log('---textdata-----');
                       console.log(e1.text);
                       console.log('---id-----');
                       console.log(e1.id);
                       var buffer = Buffer1.Buffer(e1.text); //data nhan duoc la json ta chuyen ve buffer 
                       var tostring = buffer.toString(); // sau chuyen buffer ve chuoi tostring
                       console.log('---text-----');
                       console.log(tostring);
                       var res = [
                           { text1: tostring, send1: tostring }
                       ];
                       console.log(res);
                       e.setState({
                           id: e1.id,
                           maunen: tostring,
                           dataJson: tostring,
                           text: tostring,
                           dataSource: ds.cloneWithRows(res),
                           send: tostring,
                           refreshing: true,
   
                       });
   
                   })
               }
               { 
                   data.noidungemit.map(e2 => {
                       var dataImageJson1 = e2.dataImageJson;
                       console.log('-----dataImageJson1-----');
                       console.log(dataImageJson1);
                      // console.log(dataImageJson1.toImage());
                   })
   
               }
           */
}

{
       /*
          this.setState({ //lay tu mang 1
              typedata: data.typedata,
              noidungemit: data.noidungemit,
          })
              .then(this.state.typedata.map(e2 => {
                  e.setState({
                      textNew: e2.text,
                      id: e2.id,
                  });
                  console.log('-----textNew----');
                  console.log(this.state.textNew);
                  console.log('----imageNewJson----');
                  console.log(this.state.id);
              }))
              .then(this.state.noidungemit.map(e3 => {
                  e.setState({
                      imageNewJson: e3.dataImageJson,
                  });
                  console.log('----imageNewJson----');
                  console.log(this.state.imageNewJson);
              }));
              */
}
