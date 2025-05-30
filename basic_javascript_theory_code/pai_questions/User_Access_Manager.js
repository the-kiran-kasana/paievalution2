const ROLE_FEATURES = {
  admin:  ['dashboard', 'settings'],
  viewer: ['dashboard']
};


function createAccessControl(role)
{
     return function canAccess(feature)
     {
         return ROLE_FEATURES[role].includes(feature)
     }
}


function showAccessMessage(feature)
{
  let role = this.role;
  let name = this.name;

  let access = ROLE_FEATURES[role].includes(feature);

  if(access)
  {
    console.log(`${capitalize(role)} has access to ${feature}`)
  }else{
    console.log(`${capitalize(role)} does not have access to ${feature}`)
  }
}

function capitalize(str)
{
    return str.charAt(0).toUpperCase()+ str.slice(1)
}

const adminAccess = createAccessControl("admin");
console.log(adminAccess("settings")); // true

const viewer = { 
    role: "viewer", 
    name: "Joe" 
};

showAccessMessage.call(viewer, "dashboard");  // Viewer has access to dashboard

const viewerMsg = showAccessMessage.bind({ role: "viewer", name: "Joe" });
viewerMsg("settings");                        // Viewer does NOT have acce