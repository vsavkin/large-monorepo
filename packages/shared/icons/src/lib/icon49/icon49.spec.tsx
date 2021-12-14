import { render } from '@testing-library/react';

import Icon49 from './icon49';

describe('Icon49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon49 />);
    expect(baseElement).toBeTruthy();
  });
});
