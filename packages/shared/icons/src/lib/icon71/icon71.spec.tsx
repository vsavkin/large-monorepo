import { render } from '@testing-library/react';

import Icon71 from './icon71';

describe('Icon71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon71 />);
    expect(baseElement).toBeTruthy();
  });
});
