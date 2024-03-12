import {supabase} from '../../Services/supabaseClient'

export default async (req,res)=>{
  const data=await supabase
  .from('feed')
  .select('*')
  .order('id',{ascending:false})

  res.status(200).json({data:data});
}
// import { supabase } from '../../Services/supabaseClient';

// export default async (req, res) => {
//   try {
//     const { data, error } = await supabase
//       .from('feed')
//       .select('*')
//       .order('id', { ascending: false });

//     if (error) {
//       throw error;
//     }

//     res.status(200).json({ data });
//   } catch (error) {
//     console.error('Error fetching data from Supabase:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// api/get-posts.js
// import { supabase } from '../../Services/supabaseClient';

// export default async (req, res) => {
//   try {
//     const supabase = await supabase; // Wait for the initialization to complete
//     const { data, error } = await supabase
//       .from('feed')
//       .select('*')
//       .order('id', { ascending: false });

//     if (error) {
//       throw error;
//     }

//     res.status(200).json({ data });
//   } catch (error) {
//     console.error('Error fetching data from Supabase:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

