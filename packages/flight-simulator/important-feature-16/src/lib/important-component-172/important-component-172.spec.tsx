import { render } from '@testing-library/react';

import ImportantComponent172 from './important-component-172';

describe('ImportantComponent172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent172 />);
    expect(baseElement).toBeTruthy();
  });
});
