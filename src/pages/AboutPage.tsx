import { useAppSelector } from "../redux/hook";
import avatar from "../assets/3x4=4 cr merah(new).jpg";
import {
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { missingObj } from "../util";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function AboutPage() {
  const { name, age, desc, address, organization, study, work } =
    useAppSelector((state) => state.about);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Ismail Al Ghani.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Ismail Al Ghani.pdf";
        alink.click();
      });
    });
  };
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
          <p className="text-base font-semibold italic">{address}</p>
          <p className="text-base text-justify italic">{desc}</p>
          <div className="flex justify-end">
            <Button
              {...missingObj}
              variant="filled"
              color="blue"
              onClick={onButtonClick}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <p className="text-2xl font-bold">School</p>
        <Card
          {...missingObj}
          className="shadow-xl border-2 border-blue-gray-800 w-full"
        >
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
        <Card
          {...missingObj}
          className="shadow-xl border-2 border-blue-gray-800 w-full"
        >
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

        {work.map((item) => (
          <Card
            {...missingObj}
            key={item.companyName}
            className="p-4 shadow-xl border-2 border-blue-gray-800 w-full"
          >
            <div className="flex flex-col w-full gap-4">
              <p className="text-base font-bold">
                {item.companyName} -{" "}
                <span className="text-blue-900">{item.role}</span>
              </p>
              <p className="text-base font-normal italic">{item.duration}</p>
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
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
