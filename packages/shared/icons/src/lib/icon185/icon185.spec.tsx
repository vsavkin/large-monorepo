import { render } from '@testing-library/react';

import Icon185 from './icon185';

describe('Icon185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon185 />);
    expect(baseElement).toBeTruthy();
  });
});
