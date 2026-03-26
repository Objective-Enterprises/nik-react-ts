import { useState } from "react";
import { useUserContext, type User } from "./UserContext";

interface UpdateUserFormProps {
  user: User
  index: number
}
export default function UpdateUserForm ({
  user,
  index
}: UpdateUserFormProps) {
  const { updateUser } = useUserContext();
  const [formData, setFormData] = useState({
    userName: "",
    job: "",
    bio: ""
  });

  return (
    <form onSubmit={
      e => {
        e.preventDefault();
        
        const updatedFields: Partial<User> = {};

        if (formData.userName.trim() !== "") {
          updatedFields.userName = formData.userName;
        }

        if (formData.job.trim() !== "") {
          updatedFields.job = formData.job;
        }

        if (formData.bio.trim() !== "") {
          updatedFields.bio = formData.bio;
        }

        updateUser(index, updatedFields);

        setFormData({
          userName: "",
          job: "",
          bio: ""
        });
      }
    }>
      <button type="submit">🔽 Apply updates 🔽</button>
      <div>
        <label htmlFor="userName">Name</label>
        <input 
          type="text" 
          name="userName"
          placeholder="now I'm Cassandra"
          onChange={e => setFormData({
              ...formData,
              userName: e.target.value
            })
          }
          value={formData.userName}
        />
      </div>
      <div>
        <label htmlFor="job">Job</label>
        <input 
          type="text" 
          name="job"
          placeholder="whistle blower"
          onChange={e => setFormData({
              ...formData,
              job: e.target.value
            })
          }
          value={formData.job}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea 
          name="bio"
          placeholder="Born in Zakovia, has been running from the law most of my life"
          onChange={e => setFormData({
              ...formData,
              bio: e.target.value
            })
          }
          value={formData.bio}
        />
      </div>
    </form>
  )
}