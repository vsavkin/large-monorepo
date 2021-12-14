import { render } from '@testing-library/react';

import ImportantComponent156 from './important-component-156';

describe('ImportantComponent156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent156 />);
    expect(baseElement).toBeTruthy();
  });
});
