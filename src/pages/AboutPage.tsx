import { useAppSelector } from "../redux/hook";
import avatar from "../assets/3x4=4 cr merah(new).jpg";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { missingObj } from "../util";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function AboutPage() {
  const { name, age, address, organization, study, work } = useAppSelector(
    (state) => state.about
  );
  return (
    <div className="container flex flex-col gap-4 min-h-screen px-[2vh] sm:px-[9vh] w-full py-12">
      <div className="flex w-full gap-4 items-center">
        <img
          className="h-96 w-96 rounded-full object-cover object-center"
          src={avatar}
          alt="avatar"
        />
        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl font-bold">
            {name} - <span className="text-blue-900">{age}</span>
          </p>
          <p className="text-base italic">{address}</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <p className="text-2xl font-bold">School</p>
        <Card {...missingObj} className="w-full">
          <List {...missingObj}>
            {study.map((school) => (
              <ListItem {...missingObj} key={school.nameSchool}>
                <ListItemPrefix {...missingObj}>
                  <InformationCircleIcon className="w-6 h-6" />
                </ListItemPrefix>
                <p className="text-base font-medium">
                  {school.nameSchool} -{" "}
                  <span className="italic">
                    {school.startStudy} - {school.endStudy}
                  </span>
                </p>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div className="flex flex-col w-full gap-4">
        <p className="text-2xl font-bold">Organization</p>
        <Card {...missingObj} className="w-full">
          <List {...missingObj}>
            {organization.map((org) => (
              <ListItem {...missingObj} key={org.nameOrganization}>
                <ListItemPrefix {...missingObj}>
                  <InformationCircleIcon className="w-6 h-6" />
                </ListItemPrefix>
                <p className="text-base font-medium">
                  {org.nameOrganization} -{" "}
                  <span className="text-blue-900">
                    {org.organitationPosition}
                  </span>
                  <span className="italic">({org.year})</span>
                </p>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div className="flex flex-col w-full gap-4">
        <p className="text-2xl font-bold">Work</p>
        <Card {...missingObj} className="w-full">
          <List key={"work"} {...missingObj}>
            {work.map((item) => (
              <ListItem {...missingObj} key={item.companyName}>
                <div className="flex flex-col w-full gap-4">
                  <p className="text-base font-bold">
                    {item.companyName} -{" "}
                    <span className="text-blue-900">{item.role}</span>
                  </p>
                  <p className="text-base font-normal italic">
                    {item.duration}
                  </p>
                  <p className="text-base font-semibold">Description:</p>
                  <List key={"work-desc"} {...missingObj}>
                    {item.descriptions.map((desc) => (
                      <ListItem {...missingObj} key={desc}>
                        <ListItemPrefix {...missingObj}>
                          <InformationCircleIcon className="w-6 h-6" />
                        </ListItemPrefix>
                        {desc}
                      </ListItem>
                    ))}
                  </List>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
