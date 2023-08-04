import { server } from "./config/config.js";
import { main } from "./events/index.js";

main();
server.listen(process.env.PORT || 3000, () =>
  console.log(`server port ${process.env.PORT || 3000}`)
);
