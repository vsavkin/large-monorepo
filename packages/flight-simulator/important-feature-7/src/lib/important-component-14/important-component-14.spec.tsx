import { render } from '@testing-library/react';

import ImportantComponent14 from './important-component-14';

describe('ImportantComponent14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent14 />);
    expect(baseElement).toBeTruthy();
  });
});
