import { render } from '@testing-library/react';

import Dialog180 from './dialog180';

describe('Dialog180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog180 />);
    expect(baseElement).toBeTruthy();
  });
});
