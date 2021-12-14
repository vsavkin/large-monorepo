import { render } from '@testing-library/react';

import ImportantComponent71 from './important-component-71';

describe('ImportantComponent71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent71 />);
    expect(baseElement).toBeTruthy();
  });
});
