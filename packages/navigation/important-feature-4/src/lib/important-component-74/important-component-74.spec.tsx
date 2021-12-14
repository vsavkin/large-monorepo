import { render } from '@testing-library/react';

import ImportantComponent74 from './important-component-74';

describe('ImportantComponent74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent74 />);
    expect(baseElement).toBeTruthy();
  });
});
