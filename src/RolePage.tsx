import { Tabs, Paper, Badge, Text, Group, Checkbox } from "@mantine/core";
import {
  IconBriefcase,
  IconUsers,
  IconAdjustmentsHorizontal,
} from "@tabler/icons";
import data from "./data";
const RolePage = () => {
  return (
    <Paper shadow="xl" radius="md" p="xs" m="1rem auto" w="90%">
      <Tabs color="teal" defaultValue="second">
        <Tabs.List sx={{ justifyContent: "space-around" }} p={0}>
          <Tabs.Tab value="first" fw={500} fz="xl" w="50%">
            All users <Badge>5</Badge>
          </Tabs.Tab>
          <Tabs.Tab value="second" color="blue" fw={500} fz="xl" w="50%">
            User role manager
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          {/* USERS */}
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs" bg={"#b2d9ee4b"}>
          <Paper
            m={0}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text>Actions</Text>

            <Group position="right" >
              <Text  mx={3} fw={500}>
                Member
              </Text>
              <Text mx={3} fw={500}>
                Manager
              </Text>
              <Text mx={3} fw={500}>
                Admin
              </Text>
            </Group>
          </Paper>
          <Group>
            <IconBriefcase />
            <Text fw={700}>Jobs management</Text>
          </Group>
          {data.jobs.map((item) => (
            <Paper
              py={10}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text fw={500} sx={{width:"35%"}} >{item.description}</Text>
              <Group>
                <Checkbox  mx={20} />
                <Checkbox   mx={20} />
                <Checkbox  mx={20}  />
              </Group>
            </Paper>
          ))}
          <Group>
            <IconUsers />
            <Text fw={700}>Candidate management</Text>
          </Group>
          {data.Candidate.map((item) => (
            <Paper
              py={10}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text fw={500} sx={{width:"35%"}}>{item.description}</Text>
              <Group>
                <Checkbox mx={20} />
                <Checkbox mx={20} />
                <Checkbox mx={20} />
              </Group>
            </Paper>
          ))}
          <Group>
            <IconAdjustmentsHorizontal />
            <Text fw={700}>User management</Text>
          </Group>
          {data.user.map((item) => (
            <Paper
              py={10}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text fw={500} sx={{width:"35%"}}>{item.description}</Text>
              <Group>
                <Checkbox mx={20} />
                <Checkbox mx={20} />
                <Checkbox mx={20} />
              </Group>
            </Paper>
          ))}
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default RolePage;
