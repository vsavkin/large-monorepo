import { render } from '@testing-library/react';

import Dialog202 from './dialog202';

describe('Dialog202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog202 />);
    expect(baseElement).toBeTruthy();
  });
});
