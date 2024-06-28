import {json} from '@sveltejs/kit';
import {v4 as uuidv4} from 'uuid';

export async function POST({request}) {
  const body = JSON.stringify(await request.json());
  const cloudflare = import.meta.env.VITE_CLOUDFLARE;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cloudflare}`
    },
    body
  };
  const account_id = '0e9b5fad61935c0d6483962f4a522a89';
  const namespaces_id = '030f4a5a78ac438d84b27990fd77f016';
  fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account_id}/storage/kv/namespaces/${namespaces_id}/values/${uuidv4()}`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return json({
    status: 200
  });
}
