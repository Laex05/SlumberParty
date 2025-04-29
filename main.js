import { Quaternion } from "./SlumberAPI/Quaternion.js";
import { Vector3 } from "./SlumberAPI/Vector3.js";
import { spawnCube } from "./SpawnCube_Func.js";

const rot = Quaternion.one;
const radius = 20;

for (let x = 0; x < radius*2; x++) {
  for (let z = 0; z < radius*2; z++) {
    const pos = new Vector3(-20 + x, 0, -20 + z);

    const scaler = Math.random();
    const scale = new Vector3(scaler, scaler, scaler);
    
    spawnCube(pos, scale, rot);
  }
}

