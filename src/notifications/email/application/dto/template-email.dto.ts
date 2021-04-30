export class templateEmailDto {
  templateName: string;
  templateContent: [];
  message: Message;
  async: boolean;
  ipPool: string;

  constructor(templateName: string, subject: string, to: To[], from: From, globalVariables: GlobalVariables[]) {
    const message: Message = {
      fromEmail: from.email,
      fromName: from.name,
      to,
      subject,
      merge: true,
      mergeLanguage: 'mailchimp',
      globalMergeVars: globalVariables,
      // mergeVars: variables.map((v): VariablesForUser => ({ rcpt: v.email, vars: v.variables })),
    };

    this.templateName = templateName;
    this.templateContent = [];
    this.message = message;
    this.async = false;
    this.ipPool = 'Main Pool';
  }
}

class Message {
  fromEmail: string;
  fromName: string;
  to: To[];
  subject: string;
  merge: boolean;
  mergeLanguage: string;
  globalMergeVars: GlobalVariables[];
  // mergeVars: variables.map((v): VariablesForUser => ({ rcpt: v.email, vars: v.variables })),
}

class GlobalVariables {
  name: string;
  content: string;
}

class To {
  email: string;
  name: string;
  type: string;
}

class From {
  email: string;
  name: string;
}

export class Variable {
  name: string;
  content: string;
}

export class VariablesForRecipient {
  readonly email: string;
  variables: Variable[];
}
