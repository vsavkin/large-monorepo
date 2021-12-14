import { render } from '@testing-library/react';

import ImportantComponent214 from './important-component-214';

describe('ImportantComponent214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent214 />);
    expect(baseElement).toBeTruthy();
  });
});
