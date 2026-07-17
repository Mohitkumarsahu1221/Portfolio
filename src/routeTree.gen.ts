import { Route as AboutRoute } from "./routes/about";
import { Route as ContactRoute } from "./routes/contact";
import { Route as IndexRoute } from "./routes/index";
import { Route as ProjectsRoute } from "./routes/projects";
import { Route as ResumeRoute } from "./routes/resume";
import { Route as RootRoute } from "./routes/__root";

export const routeTree = RootRoute.addChildren([
	IndexRoute,
	ProjectsRoute,
	AboutRoute,
	ResumeRoute,
	ContactRoute,
]);