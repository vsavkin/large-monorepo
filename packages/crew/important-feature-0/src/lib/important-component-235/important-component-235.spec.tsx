import { render } from '@testing-library/react';

import ImportantComponent235 from './important-component-235';

describe('ImportantComponent235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent235 />);
    expect(baseElement).toBeTruthy();
  });
});
