import { render } from '@testing-library/react';

import Component236 from './component236';

describe('Component236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component236 />);
    expect(baseElement).toBeTruthy();
  });
});
