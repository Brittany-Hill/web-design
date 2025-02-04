
// import fetch from 'node-fetch';
// import { Schema } from '../../data/resource';
//  // Ensure this path is correct and the module exists


// const WEB3FORMS_ACCESS_KEY = "d36f3135-7068-45bf-a9f4-cf05c93f3d4c";

// export const handler: Schema["emailer"]["functionHandler"] = async (event: any): Promise<string | null> => {
//     try {
//         const { name, email, message } = event.arguments;
//         console.log(name, email, message);
//         const response = await fetch('https://api.web3forms.com/submit', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 apikey: WEB3FORMS_ACCESS_KEY,
//                 name,
//                 email,
//                 message
//             }),
//         });
//         const result = 'Your message has been sent successfully!';
//     } catch (error) {
//         console.error(error);
//         return null;
//         console.error(error);
//     }
// };

