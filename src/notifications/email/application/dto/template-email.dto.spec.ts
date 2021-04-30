import { templateEmailDto } from './template-email.dto';

describe('TemplateEmailDto', () => {
  const mockData = {
    templateName: 'template name fake',
    subject: 'subject fake',
    to: [
      {
        email: 'toemailfake@gmail.com',
        name: 'to name fake',
        type: 'to type fake',
      },
    ],
    from: {
      email: 'fromemailfake@gmail.com',
      name: 'from name fake',
    },
    globalVariables: [
      {
        name: 'global name fake',
        content: 'global content fake',
      },
    ],
  };

  const entity: templateEmailDto = new templateEmailDto(
    mockData.templateName,
    mockData.subject,
    mockData.to,
    mockData.from,
    mockData.globalVariables,
  );

  describe('Set value', () => {
    describe('TemplateName Property', () => {
      it('Should return set value templateName', () => {
        const result = 'template name fake';
        expect(result).toEqual(entity.templateName);
      });

      it('Should type string', () => {
        expect('string').toEqual(typeof entity.templateName);
      });
    });

    describe('TemplateContent Property', () => {
      it('Should return set value templateContent', () => {
        const result = [];
        expect(result).toEqual(entity.templateContent);
      });

      it('Should type object', () => {
        expect('object').toEqual(typeof entity.templateContent);
      });
    });

    describe('Message property', () => {
      describe('FromEmail Property', () => {
        it('Should return set value fromEmail', () => {
          const result = 'fromemailfake@gmail.com';
          expect(result).toEqual(entity.message.fromEmail);
        });

        it('Should type string', () => {
          expect('string').toEqual(typeof entity.message.fromEmail);
        });
      });

      describe('FromName Property', () => {
        it('Should return set value fromName', () => {
          const result = 'from name fake';
          expect(result).toEqual(entity.message.fromName);
        });

        it('Should type string', () => {
          expect('string').toEqual(typeof entity.message.fromName);
        });
      });

      describe('To Property', () => {
        describe('Email Property', () => {
          it('Should return set value email', () => {
            const result = 'toemailfake@gmail.com';
            expect(result).toEqual(entity.message.to[0].email);
          });

          it('Should type string', () => {
            expect('string').toEqual(typeof entity.message.to[0].email);
          });
        });

        describe('Name Property', () => {
          it('Should return set value name', () => {
            const result = 'to name fake';
            expect(result).toEqual(entity.message.to[0].name);
          });

          it('Should type string', () => {
            expect('string').toEqual(typeof entity.message.to[0].name);
          });
        });

        describe('Type Property', () => {
          it('Should return set value type', () => {
            const result = 'to type fake';
            expect(result).toEqual(entity.message.to[0].type);
          });

          it('Should type string', () => {
            expect('string').toEqual(typeof entity.message.to[0].type);
          });
        });
      });

      describe('Subject Property', () => {
        it('Should return set value subject', () => {
          const result = 'subject fake';
          expect(result).toEqual(entity.message.subject);
        });

        it('Should type string', () => {
          expect('string').toEqual(typeof entity.message.subject);
        });
      });

      describe('MergeLanguage Property', () => {
        it('Should return set value mergeLanguage', () => {
          const result = 'mailchimp';
          expect(result).toEqual(entity.message.mergeLanguage);
        });

        it('Should type string', () => {
          expect('string').toEqual(typeof entity.message.mergeLanguage);
        });
      });

      describe('GlobalMergeVars Property', () => {
        describe('Name Property', () => {
          it('Should return set value name', () => {
            const result = 'global name fake';
            expect(result).toEqual(entity.message.globalMergeVars[0].name);
          });

          it('Should type string', () => {
            expect('string').toEqual(typeof entity.message.globalMergeVars[0].name);
          });
        });

        describe('Content Property', () => {
          it('Should return set value content', () => {
            const result = 'global content fake';
            expect(result).toEqual(entity.message.globalMergeVars[0].content);
          });

          it('Should type string', () => {
            expect('string').toEqual(typeof entity.message.globalMergeVars[0].content);
          });
        });
      });
    });

    describe('Async Property', () => {
      it('Should return set value async', () => {
        const result = false;
        expect(result).toEqual(entity.async);
      });

      it('Should type boolean', () => {
        expect('boolean').toEqual(typeof entity.async);
      });
    });

    describe('IpPool Property', () => {
      it('Should return set value ipPool', () => {
        const result = 'Main Pool';
        expect(result).toEqual(entity.ipPool);
      });

      it('Should type string', () => {
        expect('string').toEqual(typeof entity.ipPool);
      });
    });
  });
});
