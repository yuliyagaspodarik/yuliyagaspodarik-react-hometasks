import configureRouter from "../routerConfig.js";

function navigateToListPage(doc) {
  console.log('Rendering list screen.');

  const router = configureRouter(doc, "/");
  router.navigate("/");
}

function notifyAboutBackToListView(doc) {
  const backToList = new Event("back-to-list-fired");
  doc.dispatchEvent(backToList);
}

function todoReportActionHandler(doc, event) {
  const actionName = event.target.dataset["action"];

  if (actionName === "back-to-list") {
    console.log(`Processing back-to-list`);
    notifyAboutBackToListView(doc);
  }
}

let boundTodoReportActionHandler = null;

let boundRenderListPage = null;

export function getReportEventHandlers(doc) {
  boundTodoReportActionHandler =
    boundTodoReportActionHandler !== null
      ? boundTodoReportActionHandler
      : todoReportActionHandler.bind(null, doc);

  boundRenderListPage =
    boundRenderListPage !== null
      ? boundRenderListPage
      : navigateToListPage.bind(null, doc);

  return [
    {
      elementId: "app-container",
      eventName: "click",
      handler: boundTodoReportActionHandler,
    },
    {
      element: doc,
      eventName: "back-to-list-fired",
      handler: boundRenderListPage,
    },
  ];
}
