import { render } from '@testing-library/react';

import Component96 from './component96';

describe('Component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component96 />);
    expect(baseElement).toBeTruthy();
  });
});
