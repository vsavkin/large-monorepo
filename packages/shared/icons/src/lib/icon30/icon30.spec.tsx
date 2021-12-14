import { render } from '@testing-library/react';

import Icon30 from './icon30';

describe('Icon30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon30 />);
    expect(baseElement).toBeTruthy();
  });
});
