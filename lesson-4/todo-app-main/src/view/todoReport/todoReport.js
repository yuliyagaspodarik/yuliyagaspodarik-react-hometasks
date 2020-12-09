import {clearRootElement, createElement} from "../../helpers";
import {setupEventListeners} from "../../events";
import {getTodoEventHandlers} from "../../events/todoEventHandlers";

function renderAppContainer(doc) {
  const element = createElement(doc, "div");
  element.id = "app-container";

  return element;
}

function renderTodoTotal(doc, totalCount) {
  const h2 = createElement(doc, "h2");
  const textSpan = createElement(doc, "span");
  textSpan.id = "total-counter-text";
  textSpan.innerHTML = "Total Todo Count:";

  const totalSpan = createElement(doc, "span");
  totalSpan.id = "total-counter-number";
  totalSpan.innerHTML = `${totalCount}`;

  h2.append(textSpan);
  h2.append(totalSpan);

  return h2;
}

function renderTodoInfo(doc, Count, optionCounter, ) {
  const h3 = createElement(doc, "h3");
  const textSpan = createElement(doc, "span");
  textSpan.id = optionCounter;
  textSpan.innerHTML = `${optionCounter}:`;

  const totalSpan = createElement(doc, "span");
  totalSpan.innerHTML = `${Count}`;

  h3.append(textSpan);
  h3.append(totalSpan);

  return h3;
}

export default function renderReportPage(doc, allTodo) {
  const rootElement = clearRootElement(doc);
  const appContainer = renderAppContainer(doc);

  const todoReport = createElement(doc, "div", "todo-report-container");
  todoReport.append(renderTodoTotal(doc, allTodo.length));

  let completedCounter = 0;
  let postponedCounter = 0;

  for (let todo of allTodo) {
    if (todo.dateCompleted !== null) {
      completedCounter += 1;
    }

    if (todo.state.Postponed === "postponed") {
      postponedCounter += 1;
    }
  }

  todoReport.append(renderTodoInfo(doc, completedCounter, 'completed'));
  todoReport.append(renderTodoInfo(doc, postponedCounter, 'postponed'));

  appContainer.append(todoReport);
  rootElement.append(appContainer);

  setupEventListeners(doc, getTodoEventHandlers(doc));
}
