import { render } from '@testing-library/react';

import Icon170 from './icon170';

describe('Icon170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon170 />);
    expect(baseElement).toBeTruthy();
  });
});
