export default function transportFee(dayTime){
switch(dayTime){
  case "morning": return "R20";
    case "afternoon": return "R10";
    default: return "free";
    
              }
}
