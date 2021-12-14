import { render } from '@testing-library/react';

import ImportantComponent66 from './important-component-66';

describe('ImportantComponent66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent66 />);
    expect(baseElement).toBeTruthy();
  });
});
